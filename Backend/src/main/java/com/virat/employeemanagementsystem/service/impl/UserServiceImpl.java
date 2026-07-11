package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.request.UserRequestDTO;
import com.virat.employeemanagementsystem.dto.response.UserResponseDTO;
import com.virat.employeemanagementsystem.entity.Employee;
import com.virat.employeemanagementsystem.entity.User;
import com.virat.employeemanagementsystem.exception.EmployeeAlreadyAssignedException;
import com.virat.employeemanagementsystem.exception.EmployeeNotFoundException;
import com.virat.employeemanagementsystem.exception.UserAlreadyExistsException;
import com.virat.employeemanagementsystem.exception.UserNotFoundException;
import com.virat.employeemanagementsystem.mapper.UserMapper;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.UserRepository;
import com.virat.employeemanagementsystem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final EmployeeRepository employeeRepository;

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserResponseDTO saveUser(UserRequestDTO requestDTO) {

        validateUsernameAvailability(
                requestDTO.getUsername(),
                null
        );

        validateEmployeeAvailability(
                requestDTO.getEmployeeId(),
                null
        );

        Employee employee = findEmployeeById(requestDTO.getEmployeeId());

        User user = userMapper.toEntity(requestDTO);

        user.setPassword(
                passwordEncoder.encode(
                        requestDTO.getPassword()
                )
        );

        user.setEmployee(employee);

        User savedUser = userRepository.save(user);

        return userMapper.toResponseDTO(savedUser);
    }

    @Override
    public UserResponseDTO getUserById(Long id) {

        User user = findUserById(id);

        return userMapper.toResponseDTO(user);
    }

    @Override
    public List<UserResponseDTO> getAllUsers() {

        List<User> users = userRepository.findAll();

        return userMapper.toResponseDTOList(users);
    }

    @Override
    @Transactional
    public UserResponseDTO updateUser(
            Long id,
            UserRequestDTO requestDTO) {

        User user = findUserById(id);

        validateUsernameAvailability(
                requestDTO.getUsername(),
                user.getId()
        );

        validateEmployeeAvailability(
                requestDTO.getEmployeeId(),
                user.getId()
        );

        Employee employee = findEmployeeById(requestDTO.getEmployeeId());

        userMapper.updateEntity(requestDTO, user);

        user.setPassword(
                passwordEncoder.encode(
                        requestDTO.getPassword()
                )
        );

        user.setEmployee(employee);

        User updatedUser = userRepository.save(user);

        return userMapper.toResponseDTO(updatedUser);
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {

        User user = findUserById(id);

        userRepository.delete(user);
    }

    private User findUserById(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id:"+id));
    }

    private Employee findEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with id:"+id));
    }

    private void validateUsernameAvailability(
            String username,
            Long currentUserId) {

        userRepository.findByUsername(username)
                .ifPresent(existingUser -> {
                    if (!existingUser.getId().equals(currentUserId)) {
                        throw new UserAlreadyExistsException(username);
                    }
                });
    }

    private void validateEmployeeAvailability(
            Long employeeId,
            Long currentUserId) {

        userRepository.findByEmployeeId(employeeId)
                .ifPresent(existingUser -> {
                    if (!existingUser.getId().equals(currentUserId)) {
                        throw new EmployeeAlreadyAssignedException("Employee with id " + employeeId + " is already assigned.");
                    }
                });
    }

}