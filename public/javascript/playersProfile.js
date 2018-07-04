
// landing section of the site!
function playersProfile(props) {

    function commentSection(params) {
        var comments = prpps.comments.map(function(elements){
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









