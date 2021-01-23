import React from 'react';


class Footer extends React.Component {
    render() {
        
        return (
            <footer >
                <div className="footer-component-block">
                    <div className="footer-component">
                        <div className="footer-column">
                            <h3 className="footer-header">Skills</h3>
                            <ul className="footer-list">
                                <p className="footer-list-index">Ruby</p>
                                <p className="footer-list-index">JavaScript</p>
                                <p className="footer-list-index">Rails</p>
                                <p className="footer-list-index">React</p>
                                <p className="footer-list-index">Heroku</p>
                                <p className="footer-list-index">Github</p>
                                <p className="footer-list-index">HTML/CSS</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">Hobbies</h3>
                            <ul className="footer-list">
                                <p className="footer-list-index">Gaming</p>
                                <p className="footer-list-index">Sleeping</p>
                                <p className="footer-list-index">Gym</p>
                                <p className="footer-list-index">Playing with my cat</p>
                                <p className="footer-list-index">Eating</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">Get to know me</h3>
                            <ul className="footer-list">
                                <p className="footer-list-index"><a href={"https://www.linkedin.com/in/monica-liang-a06510146/"}><img className="footer-logo" src={window.linkedin} /></a></p>
                                <p className="footer-list-index"><a href={"https://github.com/lmonica97"}><img className="footer-logo" src={window.github}  /></a></p>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="country-currency">
                            <p>United States   |</p>
                            <p>   English (US) |</p>
                            <p>   $ (USD) </p>
                        </div>
                        <div className="terms-of-use">
                            <p><a href={"https://github.com/lmonica97"}><img className="footer-logo"src={window.github}  /></a></p>
                            <p><a href={"https://www.linkedin.com/in/monica-liang-a06510146/"}><img className="footer-logo" src={window.linkedin} /></a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer