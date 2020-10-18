import React from 'react';
import GitHubButton from 'react-github-btn'

//Follow Button
export function Follow() {
    return (
        <GitHubButton 
            href="https://github.com/jrshutske" 
            data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
            data-size="large"
            aria-label="Follow @jrshutske on GitHub">
            {"Follow"}
        </GitHubButton>       
    );
}

//Star Button
export function Star() {
    return (
        <GitHubButton 
            href="https://github.com/jrshutske/discord-oauth2-boilerplate"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
            data-size="large"
            data-icon="octicon-star" 
            aria-label="Star jrshutske/discord-oauth2-boilerplate on GitHub">
            {"Star"}
        </GitHubButton>    
    );
}
  
//Watch Button
export function Watch() {
    return (
        <GitHubButton 
            href="https://github.com/jrshutske/discord-oauth2-boilerplate/subscription"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
            data-size="large"
            data-icon="octicon-eye"
            aria-label="Watch jrshutske/discord-oauth2-boilerplate on GitHub">
            {"Watch"}
        </GitHubButton> 
    );
}

//Fork Button
export function Fork() {
  return (
    <GitHubButton 
        href="https://github.com/jrshutske/discord-oauth2-boilerplate/fork" 
        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
        data-icon="octicon-repo-forked"
        data-size="large" 
        aria-label="Fork jrshutske/discord-oauth2-boilerplate on GitHub">
        {"Fork"}
    </GitHubButton>
  );
}
