import React from "react";
import SocialLogin from "react-social-login";

class SocialButton extends React.Component {
    render() {
        const { children, triggerLogin, ...props } = this.props;
        return (
            <div className="login-options">
                {/* <ul className="login-options"> */}
                <a onClick={triggerLogin} {...props}>
                    {children}
                </a>
                {/* </ul> */}
            </div>
        );
    }
}

export default SocialLogin(SocialButton);