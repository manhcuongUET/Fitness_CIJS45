const components = {}
components.programsScreen = `
<form style="margin-left: 24cm;" class="form-inline">
<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Choose</label>
<select class="custom-select my-1 mr-sm-2" id="calo">
  <option selected >Calories</option>
  <option value="50">~50</option>
  <option value="100">~100</option>
  <option value="150">~150</option>
  <option value="200">~200</option>
  <option value="300">~300</option>
  <option value="400">~400</option>
</select>
<select class="custom-select my-1 mr-sm-2" id="time">
  <option selected>Time</option>
  <option value="5" >~5 minutes</option>
  <option value="10">~10 minutes</option>
  <option value="20" >~20 minutes</option>
  <option value="30">~30 minutes</option>
  <option value="45">~45 minutes</option>
  <option value="60">~60 minutes</option>
</select>
<select class="custom-select my-1 mr-sm-2" id="sex">
  <option selected>Gender</option>
  <option value="0" >Male</option>
  <option value="1">Female</option>
  <option value="2" >Both</option>
</select>
<button type="button" class="btn btn-primary" style="background-color:#c76ddd;" onclick="model.filterProgram()">Submit</button>
</form>
    <div class="program-container">
        <div class="list-program"></div>
    </div>
`
components.showProgram = `
<div class="showProgram">
            <div class="video"></div>
            <div class="des">
                <div class="text-des"></div>
                <div class="message-des">
                    <div class="list-comment">
                    </div>
                    <form id="send-comment-form">
                        <div class="input-wraper">
                            <input type="text" name="comment" placeholder="Type a comment...">
                        </div>
                        <button type="submit" style="margin-top:-8px;"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    
`
components.showNetwork = 
`
<form class="form-inline" style="margin-left: 25cm;">
<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Your location: </label>
<select class="custom-select my-1 mr-sm-2" id="location">
  <option selected>Vietnam</option>
  <option value="1">Hanoi</option>
  <option value="2">Ho Chi Minh City</option>
</select>

<button onclick="model.gymFindLocation()" type="button" class="btn btn-primary my-1">Submit</button>
</form>
<div>
<img style="width: 100%; height: 15cm;" src="..//gym/anh-nen-4.jpg" alt="">
</div>
<hr>

<div class="network-container" >
<h4 style="font-size: 18px;">ARE YOU AIMING TO BECOME MORE TONED AND BUILD SOME MUSCLE OR DO YOU JUST NEED TO DE-STRESS AFTER WORK?</h4>
<p>Going to the gym works out differently for each us. Whatever your goal NL Leisure gyms are equipped to help you reach it.</p>
<p>Our gym facilities are packed with the latest cardio, strength and weights equipment. They're staffed by instructors who can help you get the most from them. With new equipment being rolled out at sports centres across the area, NL Leisure gyms are shaping up nicely.</p>
<p>Would you like to get your heart pumping? You'll find a huge range of cardio equipment from climbing machines and exercise bikes to rowing machines and treadmills. If you're in the business of building muscle, we've made light work of assembling the best kit from barbells and dumbbells to kettlebells and medicine balls. We've also got to the core of strength and conditioning with the latest CrossFit and resistance equipment.</p>
<h4 style="font-size: 18px">ARE YOU READY TO GET STARTED? AS SOON AS YOU'VE COMPLETED YOUR INDUCTION YOU'LL BE READY TO TEST YOUR BODY TO THE LIMIT.</h4>
<p>Sign up to be an NL Leisure member and make the most of your defining moments at the gym.</p>
<div id="list-network"></div>
</div>
`
components.forumScreen =`
<div class="forum-containner">
<div class="create-new-post">
    <div class="header">Create a new post</div>
    <form id="upload-post">
        <div class="input-wraper">
            <input type="text" name="title" placeholder="Title...">
        </div>
        <div class="input-wraper">
            <input type="text" name="content" placeholder="Content...">
        </div>
        <input type="file" name="file">
        <button type="submit">Upload file</button>
    </form>
</div>
<div class="main">
    <div class="aside-left">
        
    </div>
    <div class="aside-right">
        <div class="recent-post">
            <div class="title">
                Recent Posts
            </div>
            <div class="list-title">

            </div>
        </div>    
    </div>
</div>
</div>
`
components.showOneForumPost=`
            <div class="one-forum-post">
                <div class="post-content">
                </div>
                <div class="comment-wrapper">
                <form id="send-forum-comment-form">
                <div class="input-wraper">
                    <input type="text" name="comment" placeholder="Type a comment...">
                </div>
                <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
                    <div class="list-forum-comment">
                        
                    </div>
                        
                </div>
            </div>
    `


components.loginScreen =`
<section class="sign-in">
<div class="container1">
    <div class="signin-content">
        <div class="signin-image">
            <figure>
                <img src="../image/image-style/81a29540400159.577dcf3623a88.gif"  alt="">
            </figure>
            <a href="#" class="signup-image-link" class="redirect-to-register" onclick="view.setActiveScreen('registerScreen')">Create an account</a>
        </div>
        
        <div class="signin-form">
                <h2 class="form-title">Sign in</h2>
                <form method="POST" class="register-form" id="login-form">
                    <div class="form-group">
                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="email" id="name" placeholder="Email" />
                        
                    </div>
                    <div class="form-group">
                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="password" id="your_pass" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember
                            me</label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                    </div>
                </form>
                <div class="social-login">
                    <span class="social-label">Or login with</span>
                    <ul class="socials">
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
        </div>
    </div>
</div>
</section>
`
components.registerScreen = `
<section class="signup">
<div class="container1">
    <div class="signup-content">
        <div class="signup-form">
            <div>
                <h2 class="form-title">Sign up</h2>
            </div>
            <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="yourName" id="name" placeholder="Your Name" />
                    <div class="error" id="your-name-error"></div>
                </div>
                <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <div class="error" id="email-error"></div>
                </div>
                <div class="form-group">
                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" id="pass" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                    <input type="password" name="confirmPassword" id="re_pass" placeholder="Repeat your password" />
                </div>
                <div class="form-group styleGender">
                    <div class="flex1">
                        <label for="re-pass"><i class="zmdi zmdi-male-female"></i></label>
                        <select name="Sex" id="dropdownid" aria-placeholder="sex" required>
                            <option value="" disabled="disabled" selected="selected">Gender</option>
                            <i class="zmdi zmdi-chevron-down"></i>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>
                    </div>
                </div>
                <div class="form-group styleForm">
                    <div style="margin-right: 5px;">
                        <input type="text" placeholder="Height">
                    </div>
                    <div style="margin-left: 5px;">
                        <input type="text" placeholder="Weight">
                    </div>
                </div>

                <div class="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all
                        statements in <a href="#" class="term-service">Terms of service</a></label>
                </div>
                <div class="form-group form-button">
                    <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                </div>

            </form>
        </div>
        <div class="signup-image">
            <figure><img src="../image/image-style/81a29540400159.577dcf3623a88.gif" alt="sing up image">
            </figure>
            <a href="#" class="signup-image-link" id="redirect-to-login">I am already member</a>
        </div>
    </div>
</div>
</section>
`
    
