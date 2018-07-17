
// landing section of the site!
function adminSection(props) {
    function headerSection() {
        return (<div className='headerSection'>
            <ul>
                <li>Home</li>
                <li>Players</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>);
    }

    function clubLogo(props) {
        var clubName = props.homePageData.pickedClub.clubName;
        return (<div className="playersProfilePictureSection">
            <ul>
                <li><img src={'/' + props}></img></li>
                <li>{clubName}</li>
            </ul>
            <i className="fa fa-love"></i>
            <p>10</p>
        </div>);
    }

    function clubContact(props) {
        return (
            <div>
                <h3>Club Details</h3>
                <p>Description: {props.homePageData.pickedClub.description}</p>
                <p>Club Name: {props.homePageData.pickedClub.clubName}</p>
                <p>Email Address: {props.homePageData.pickedClub.email}</p>
                <p>Phone Number: {props.homePageData.pickedClub.telephone}</p>
                <p>Web Address: {props.homePageData.pickedClub.address}</p>
                <p>Club Manager: {props.homePageData.pickedClub.manager}</p>
            </div>);
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

    function commentSection(params) {
        var comments = props.comments.map(function (elements) {
            <div className="individualComments">
                <img src={elements[2]}></img>
                <p>{elements[3]}</p>
                <p>{elements[0] + " " + elements[1]}</p>
            </div>
        });
        return (comments);
    }

    render(props){
        return (
            <div>
                <div>{headerSection()}</div>
                <div>{clubLogo(props)}</div>
                <div>{clubContact(props)}</div>
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









