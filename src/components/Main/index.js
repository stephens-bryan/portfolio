import React from 'react';

import './main.scss';

const Main = () => {

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    return(
        <main class="main max-width text" id="main">
        <div class="main-parent-container">
            <div class="main-parent hexagon-container">
                <h3 class="hexagon-container-heading">Languages</h3>
                <div class="hexagon-container-preamble">I have experience with a variety of programming languages, both
                    front-end and
                    back-end oriented.
                </div>

                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                        title="W3C [CC BY (https://creativecommons.org/licenses/by/3.0)]" alt="HTML5-logo" />
                    <small class="hexagon-helper-text">HTML5</small>
                </div>
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                        title="Rudloff [CC BY (https://creativecommons.org/licenses/by/3.0)]" alt="CSS3-logo" />
                    <small class="hexagon-helper-text">CSS3</small>
                </div>
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        title="Ramaksoud2000 via Chris Williams [Public domain]" alt="JavaScript-logo" />
                    <small class="hexagon-helper-text">JavaScript</small>
                </div>
            </div>
            <div class="main-parent hexagon-container">
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                        title="Colin Viebrock [CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)]"
                        alt="PHP-logo" />
                    <small class="hexagon-helper-text">PHP</small>
                </div>
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                        title="Andres15alvarez [CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)]"
                        alt="CSharp-logo" />
                    <small class="hexagon-helper-text">C#</small>
                </div>
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                        title="node.js authors [Public domain]" alt="Nodejs-logo" />
                    <small class="hexagon-helper-text">Node.js</small>
                </div>
            </div>
            <div class="main-parent hexagon-container">
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/512px-Antu_mongodb.svg.png"
                        title="Fabián Alexis [CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)]"
                        alt="MongoDB-logo" />
                    <small class="hexagon-helper-text">MongoDB</small>
                </div>
                <div class="hexagon">

                    <img src="./assets/images/microsoft-sql-server-seeklogo.com.svg" alt="MSSQL-logo" />
                    <small class="hexagon-helper-text">MSSQL</small>
                </div>
                <div class="hexagon">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"
                        title="RRZEicons [CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)]" alt="MySql-logo" />
                    <small class="hexagon-helper-text">MySQL</small>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main;