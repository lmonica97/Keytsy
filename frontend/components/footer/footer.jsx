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
                                <p className="footer-list-index"><a href={"https://www.linkedin.com/in/monica-liang-a06510146/"}>LinkedIn</a></p>
                                <p className="footer-list-index"><a href={"https://github.com/lmonica97"}>GitHub</a></p>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer