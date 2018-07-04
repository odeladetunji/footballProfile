// parent component for all other class
class ParentComponent extends React.Component {

    Constructor(props) {
        super(props);
        this.state = {
            homePageData: {
                feuturedPlayers: [
                    /* Schema of Players 
                    [tag, footballLeg, position, firstname, lastname, middlename, state, clap, playersPictures]
                    */
                ],

                allPlayers: [
                    /* Schema of Players 
                    [tag, footballLeg, position, firstname, lastname, middlename, state, clap, playersPictures]
                    */
                ],

                blog: [
                    /*
                    [headingPicture, subHeading, shortExcerpt]*/
                ]
            },

            adminSectionData: {

            },

            playersProfile: {
                profilePicture: '',
                firstName: '',
                lastName: '',
                height: '',
                weight: '', 
                birthday: '',
                nationality: '', 
                RatingScore: '',
                nickName: '',
                address: '',
                phoneNumber: '',
                playingFoot: '',
                playingPosition: '',
                club: '',
                speed: '',
                technique: '',
                dribbling: '',
                stamina: '',
                headingJump: '',
                pass: '',
                marking: '', 
                freeKicks: '',
                goalKeeping: '',
                youTubeVideos: [/* should contain four videos*/],
                comments: {
                     // it should store arrays of each users comment Details!
                     // schema should be 
                     // [firstName, lastName, picture, comment], [firstName, lastName, picture, comment],
                }
            }
        }
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

ReactDOM.render(
    <ParentComponent />, document.getElementById('root')
);
