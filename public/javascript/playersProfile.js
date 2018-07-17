
// landing section of the site!
function playersProfile(props) {
    function headerSection(){
        return(<div className='headerSection'>
                  <ul>
                      <li>Home</li>
                      <li>Players</li>
                      <li>About</li>
                      <li>Blog</li>
                      <li>Contact</li>
                  </ul>
              </div>);
    }

    function profilePicture(){
        var firstname = props.homePageData.playersProfile.firstName;
        var lastname = props.homePageData.playersProfile.lastName;
        return(<div className="playersProfilePictureSection">
                    <ul>
                        <li><img src = {'/' + props}></img></li>
                        <li>{firstname + " " + lastname}</li>
                    </ul>
               </div>);
    }

    function mainBodySection(){
        var height = props.homePageData.playersProfile.height;
        var weight = props.homePageData.playersProfile.weight;
        var birthday = props.homePageData.playersProfile.birthday;
        var nationality = props.homePageData.playersProfile.nationality;
        var ratingScore = props.homePageData.playersProfile.ratingScore;
        return(
            <div>
                <ul>
                    <li>{height}</li>
                    <li>{weight}</li>
                    <li>{birthday}</li>
                    <li>{nationality}</li>
                    <li>{ratingScore}</li>
                </ul>
                <div>
                    <div>
                        <h2>Player Details</h2>
                        <ul>
                            <li>Nickname: {}</li>
                            <li>Address: {}</li>
                            <li>PhoneNumber: {}</li>
                            <li>Playing Foot: {}</li>
                            <li>Playing Position: {}</li>
                            <li>Club: {}</li>
                        </ul>
                        <h2>Playing Abilities</h2>
                        
                        <p>Speed</p>
                        <div className="abilities"><div id="speed"></div></div>
                        <p>Technique</p>
                        <div className="abilities"><div id="technique"></div></div>
                        <p>Dribblling</p>
                        <div className="abilities"><div id="dribbling"></div></div>
                        <p>Stamina</p>
                        <div className="abilities"><div id="Stamina"></div></div>
                        <p>Heading/Jump</p>
                        <div className="abilities"><div id="heading"></div></div>
                        <p>Pass</p>
                        <div className="abilities"><div id="pass"></div></div>
                        <p>Marking</p>
                        <div className="abilities"><div id="marking"></div></div>
                        <p>Free Kick</p>
                        <div className="abilities"><div id="freeKick"></div></div>
                        <p>Goal Keeping</p>
                        <div className="abilities"><div id="goalKeeping"></div></div>
                    </div>
                    <div className="youtubeVideos">
                         <ul>
                             <li></li>
                             <li></li>
                             <li></li>
                         </ul>
                         <video></video>
                    </div>
                </div>
            </div>
        );
    }

    function commentSection(params) {
        var comments = props.comments.map(function(elements){
                      <div className="individualComments">
                          <img src={elements[2]}></img>
                          <p>{elements[3]}</p>
                          <p>{elements[0] + " " + elements[1]}</p>
                      </div>
        });
        return(comments);
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
            </div>
            <p>Built by Agamel</p>
			);
    }


    render(props){
        return (
            <div>
                <div>
                    <h2>Comments</h2>
                    {commentSection()}
                    <h2>Comments</h2>
                    <textarea className="commentTextarea">

                    </textarea>
                    <button>Post</button>
                </div>
                <div>{footer()}</div>
            </div>
        );
    }
}









