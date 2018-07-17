
// landing section of the site!
function adminSection(props) {
    function headerSection() {
        return (<div className='headerSection'>
            <div>
                <img src="" alt=""></img>
                <ul>
                    <li>Home</li>
                    <li>Players</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <h3>Admin DashBoard</h3>
        </div>);
    }

    function adminBodySection(props){
        function displayClubs(props){
            var clubs = props.homePageData.availableClubs.map(function(element){
                 <li>element</li>
            });
            return(clubs);
        }

        function displayPlayers(props) {
            var players = props.homePageData.availablePlayers.map(function (element) {
                <li>element</li>
            });
            return (players);
        }
        var theBody = <div>
                            <div>
                                <ul>
                                    <li>Players</li>
                                    <li>View Players</li>
                                    <li>Create Players</li>
                                    <li>Edit Player</li>
                                    <li>Detect Player</li>
                                </ul>
                                <ul>
                                    <li>Clubs</li>
                                    <li>View Clubs</li>
                                    <li>Create Club</li>
                                    <li>Edit Club</li>
                                    <li>Delete Club</li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                     <div>10 Players</div>
                                     <div>15 Players</div>
                                </div>
                                <div>
                                    <div>
                                        <h3>AllPlayers</h3>
                                        <ul>{displayPlayers(props)}</ul>
                                    </div>
                                    <div>
                                        <h3>All Clubs</h3>
                                        <ul>{displayClubs(props)}</ul>
                                    </div>
                                </div>
                            </div>
                      </div>
        return();
    }

    function footer() {
        return (
            <div>
                <div><p>Copyright 2018 My Football Face, All rights reserved</p></div>
                <div>
                    <ul>
                        <li>Players</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <p>Built by Agamel</p>
            </div>
        );
    }

    render(props){
        return (
            <div>
                <div>{headerSection()}</div>
                <div>{footer()}</div>
            </div>
        );
    }
}









