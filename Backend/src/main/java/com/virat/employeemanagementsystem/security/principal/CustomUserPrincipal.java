package com.virat.employeemanagementsystem.security.principal;

import com.virat.employeemanagementsystem.entity.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
public class CustomUserPrincipal implements UserDetails {

    private final Long id;

    private final Long employeeId;

    private final String username;

    private final String password;

    private final boolean enabled;

    private final Collection<? extends GrantedAuthority> authorities;

    public CustomUserPrincipal(User user) {

        System.out.println("========== CustomUserPrincipal ==========");
        System.out.println("Username      : " + user.getUsername());
        System.out.println("Employee ID   : " + user.getEmployee().getId());
        System.out.println("Role ID       : " + user.getEmployee().getRole().getId());
        System.out.println("Role Name     : " + user.getEmployee().getRole().getName());

        this.id = user.getId();
        this.employeeId = user.getEmployee().getId();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.enabled = user.isEnabled();

        this.authorities = List.of(
                new SimpleGrantedAuthority(
                        "ROLE_" + user.getEmployee().getRole().getName()
                )
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}