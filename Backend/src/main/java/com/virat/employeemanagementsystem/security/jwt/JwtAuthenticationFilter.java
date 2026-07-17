package com.virat.employeemanagementsystem.security.jwt;

import com.virat.employeemanagementsystem.security.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final CustomUserDetailsService customUserDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        System.out.println("\n========== JWT FILTER START ==========");

        final String authHeader =
                request.getHeader("Authorization");

        System.out.println("Authorization Header = " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {

            System.out.println("No Bearer token found.");
            filterChain.doFilter(request, response);
            return;
        }

        final String jwt =
                authHeader.substring(7);

        System.out.println("JWT = " + jwt);

        final String username =
                jwtService.extractUsername(jwt);

        System.out.println("Username extracted from JWT = " + username);

        System.out.println("Existing Authentication = "
                + SecurityContextHolder.getContext().getAuthentication());

        if (username != null
                && SecurityContextHolder.getContext()
                .getAuthentication() == null) {

            UserDetails userDetails =
                    customUserDetailsService
                            .loadUserByUsername(username);

            System.out.println("UserDetails Username = "
                    + userDetails.getUsername());

            System.out.println("Authorities from UserDetails = "
                    + userDetails.getAuthorities());

            boolean valid =
                    jwtService.isTokenValid(jwt, userDetails);

            System.out.println("Token Valid = " + valid);

            if (valid) {

                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                authToken.setDetails(
                        new WebAuthenticationDetailsSource()
                                .buildDetails(request)
                );

                SecurityContextHolder.getContext()
                        .setAuthentication(authToken);

                System.out.println("Authentication stored in SecurityContext");

                System.out.println("Current Authentication = "
                        + SecurityContextHolder.getContext()
                        .getAuthentication());

                System.out.println("Current Authorities = "
                        + SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getAuthorities());
            }
        }

        System.out.println("========== JWT FILTER END ==========\n");

        filterChain.doFilter(request, response);
    }
}