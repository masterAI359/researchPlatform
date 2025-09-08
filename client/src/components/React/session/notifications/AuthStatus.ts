
export const newAccStatus: AuthStatus = {
    pending: "Creating Account",
    successful: "Account Created",
    failed: "Account creation failed"
};


export const emailStatus: AuthStatus = {
    pending: "Sending Email",
    successful: "Reset link sent!",
    failed: "Failed to email link",
};

export const loginStatus: AuthStatus = {
    pending: "Logging in",
    successful: "Logged in successfully!",
    failed: "Login failed",
};

export const passwordChangeStatus: AuthStatus = {
    pending: "Changing password",
    successful: "Updated Password!",
    failed: "Failed to update",
};

export const saveResearchStatus: AuthStatus = {
    pending: "Saving your work",
    successful: "Saved successfully!",
    failed: "Failed to save",
}

export const signOutStatus: AuthStatus = {
    pending: "Signing out",
    successful: "Signed out",
    failed: "Signout failed",
};

export const feedbackStatus: AuthStatus = {
    pending: "Submitting feedback",
    successful: "Feedback submitted!",
    failed: "Failed to submit",
};

export const deleteArticleStatus: AuthStatus = {
    pending: "Removing article",
    successful: 'Article removed',
    failed: 'Failed to remove article'
};

