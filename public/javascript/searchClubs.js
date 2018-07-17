function SearchClub(props){

    function headers(props) {
        var theHeader = <div>
                                <ul className='headerLinks'>
                                    <li>Home</li>
                                    <li>Players</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                                <h2>Search Clubs</h2>
                                <p>Filter Clubs by any or all of the following criteria</p>
                                <form className='firstSearchForm'>
                                    <input type='text' value="Name"></input>
                                    <input type='text' value="Location"></input>
                                </form>
                                <button id="searchClub">Search</button>
                        </div>
        return (theHeader);
    }
    function feuturedClubs(props) {
        var feuturedClubs = props.homePageData.allPlayers.map(function (elements) {
            <div className="eachPlayer">
                <img src={"/" + elements[3]}></img>
                <ul>
                    <li>elements[0]</li>
                </ul>
            </div>;
        });

        return (
            feuturedClubs
        );
    }

    function allClubs(props) {
        var clubs = props.homePageData.allPlayers.map(function (elements) {
            <div className="eachPlayer">
                <img src={"/" + elements[3]}></img>
                <ul>
                    <li>elements[0]</li>
                    <li>elements[1]</li>
                </ul>
                <i className='fa fa-love'></i>
                <p className="loveAmount">100</p>
            </div>;
        });

        return (
            clubs
        );
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
            return(
                <div>
                     <div>{header(props)}</div>
                     <div>{feuturedClubs(props)}</div>
                     <div>{allClubs(props)}</div>
                     <div>{footer(props)}</div>
                </div>
            );
     };
}