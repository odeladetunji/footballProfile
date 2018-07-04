
// landing section of the site!
	function home(props) {

		function headers(){
			<div>
				<ul className='headerLinks'>
					<li>Home</li>
					<li>Players</li>
					<li>About</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<h2>Search Players</h2>
			    <p>Filter players by any or all of the following criteria</p>
				<form className='firstSearchForm'>
					<input type='text'></input>
					<select>
						<options value='14 - 16'></options>
						<options value='16 - 18'></options>
						<options value='18 - 20'></options>
						<options value='20 - 22'></options>
						<options value='22 - 24'></options>
						<options value='24 - 26'></options>
						<options value='26 - 28'></options>
						<options value='28 - 30'></options>
						<options value='30 - 32'></options>
						<options value='32 - 34'></options>
						<options value='34 - 36'></options>
						<options value='36 - 38'></options>
						<options value='38 - 40'></options>
						<options value='40 - 42'></options>
						<options value='42 - 44'></options>
						<options value='44 - 46'></options>
						<options value='46 - 48'></options>
						<options value='48 - 50'></options>
						<options value='50 - 52'></options>
						<options value='52 - 54'></options>
						<options value='54 - 56'></options>
						<options value='56 - 58'></options>
						<options value='58 - 60'></options>
					</select>
					<input type='text' value="Location"></input>
					<input type='text' value="Playing Foot"></input>
					<input type='text' value="Playing Position"></input>
				</form>
				<button>Search</button>
			</div>
			return(theHeader);
		}
	
		function feutured(){
			var feuturedPlayers = props.homePageData.futuredPlayers.map(function (elements) {
				<div className="eachPlayer">
					<img src={"/" + elements[8]}></img>
					<p className='tag'>80</p>
					<ul>
						<li>elements[1]</li>
						<li>elements[2]</li>
						<li>elements[3]</li>
						<li>elements[4]</li>
					</ul>
					<i className='fa fa-clap'></i>
					<p className="clapAmount">100</p>
				</div>;
			});
			return(feuturedPlayers);
		}

		function allPlayers(){
			    var players = props.homePageData.allPlayers.map(function(elements){
				                      <div className="eachPlayer">
					                        <img src = {"/" + elements[8]}></img>
											<p className='tag'>80</p>
											<ul>
												<li>elements[1]</li>
												<li>elements[2]</li>
												<li>elements[3]</li>
												<li>elements[4]</li>
											</ul>
											<i className='fa fa-clap'></i>
											<p className="clapAmount">100</p>
									  </div>;               
			    });

            return(
               playersDetails
			);
		}

		function blogSection(){
			    var blogs = props.homePageData.blogs.map(function (elements) {
				                    <div className="eachBlogPost">
					                    <img src={"/" + elements[0]}></img>
										<p className="blogHeading">{elements[1]}</p>
										<p className="blogExcerpts">{elements[2]}</p>
				                    </div>;
			    });

			return(
				blogs
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
				</div>
				<p>Built by Agamel</p>
			);
		}

		render(props){
			return (
				<div>
				     <div>{feutured()}</div>
					 <div className="allPlayers">{allPlayers()}</div>
					 <div><button className="morePlayers">more players</button></div>
					 <div>{blogSection()}</div>
					 <div>{footer()}</div>
				</div>
			);
		}
	}
	

	

	
	

	

	