<!doctype html>
<html ng-app="myApp">
<head>
    <title>Online Flower Delivery | KABLOOM </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel="icon" href="favicon.ico" sizes="16x16" type="image/ico">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/component.css">
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="../css/sticky-footer-navbar.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style_common.css" />
    <link rel="stylesheet" type="text/css" href="css/style10.css" />
     <link rel="stylesheet" type="text/css" href="css/style4.css" />
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="css/carousel.css" >
    <meta charset='UTF-8'>
</head>
<body>

    <!-- Fixed navbar -->
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Flower</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right ">
            <li class=""><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <!-- Begin page content -->
    <div class="container-fluid">
    <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
         <ul class='list-unstyled popup-data'>
           <li class='icon-logo'>
              <img class='img-responsive' src="img/fp9.png" />
           </li>
            <li>
              <br />
           </li>
           <li>
              <form>
                 <div class='form-group'>
                    <input type="email" class="form-control" id="Email"  placeholder="Email">
                 </div>
                 <div class='form-group'>
                    <input type="password" class="form-control" id="Pwd"  placeholder="Password">
                 </div>
                 <div class='form-group'>
                    <span class='btn popup-shop'>shop</span>
                 </div>
                 <p class="or text-center">
                   <span class='popup-or'>OR</span>
                 </p>
                 <div class='form-group'>
                    <span class='btn popup-shop-fb'>SIGN UP WITH FACEBOOK</span>
                 </div>
              </form>
           </li>
           <li>
              <span class='menu-header-footer'><b>Already have an account?</b> <span class='popup-orange'>Log In »</span></span>
           </li>
           <li>
              <span class=''>By signing up you agree to our</span>
           </li>
           <li>
              <span class='popup-orange'>Terms and Conditions</span>
           </li>
         </ul>
      </div>
      </div>
    </div>

  </div>
      <div class='row'>
        <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide carusel-custom" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
        <li data-target="#myCarousel" data-slide-to="7"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide img-responsive" src="img/c1.jpg" alt="First slide">
          <!-- <div class="container">
            <div class="carousel-caption">
              <h1>Mountains</h1>
              <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div> -->
        </div>
        <div class="item">
          <img class="second-slide img-responsive" src="img/c2.jpg" alt="Second slide">
        </div>
        <div class="item">
          <img class="third-slide img-responsive" src="img/c3.jpg" alt="Third slide">
        </div>
         <div class="item">
          <img class="third-slide img-responsive" src="img/c4.jpg" alt="Fourth slide">
        </div>
        <div class="item">
          <img class="third-slide img-responsive" src="img/c5.jpg" alt="Fifth slide">
        </div>
        <div class="item">
          <img class="third-slide img-responsive" src="img/c6.jpg" alt="Sixth slide">
        </div>
        <div class="item">
          <img class="third-slide img-responsive" src="img/c7.jpg" alt="Seventh slide">
        </div>
         <div class="item">
          <img class="third-slide img-responsive" src="img/c8.png" alt="Eighth slide">
        </div>
      </div>
      <a class="left carousel-control-left" href="#myCarousel" role="button" data-slide="prev">
        <span class="fa fa-chevron-left"></span>
      </a>
      <a class="right carousel-control-right" href="#myCarousel" role="button" data-slide="next">
        <span class="fa fa-chevron-right"></span>
      </a>
    </div><!-- /.carousel -->
      </div>
       <div class="row text-center">
       <div class='col-sm-12'>
            <div class='short-banner-1'>
             <span class='short-banner-text'>Gifts For EveryOne</span>
           </div>
         </div>
        <div class="col-lg-4">
         <img class='img-responsive img-circle center-block' src='img/fp1.png'  alt="Generic placeholder image" width="140" height="140" />

          <h2>Flower</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class='img-responsive img-circle center-block' src='img/fp2.png'  alt="Generic placeholder image" width="140" height="140" />
          <h2>Flower Pots Indian</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class='img-responsive img-circle center-block' src='img/fp3.png'  alt="Generic placeholder image" width="140" height="140" />
          <h2>Flower Pots Chinees</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <div class='row hidden-xs'>
        <div class='col-sm-12'>
            <div class='short-banner-2'>
             <span class='short-banner-text'>Gifts For EveryOne</span>
           </div>
         </div>
       <div class='col-sm-12'>
            <ul class="grid cs-style-3">
            <li class='effect'>
                <div class='effect-inner'>
                  <figure>
                <img class='img-responsive' src="img/fp4.png" alt="category" >
                <figcaption>
                  <h3>Flowers</h3>
                  <span>Fresh</span>
                  <a href="#">SHOP NOW</a>
                </figcaption>
              </figure>
                </div>
                </li>
                <li>
                <div class='effect-inner'>
                  <figure>
                <img class='img-responsive' src="img/fp5.png" alt="category" >
                <figcaption>
                  <h3>Flowers</h3>
                  <span>Fresh</span>
                  <a href="#">SHOP NOW</a>
                </figcaption>
              </figure>
              </div>
              </li>
              <li>
                <div class='effect-inner'>
                  <figure>
                <img class='img-responsive' src="img/fp6.png" alt="category" >
                <figcaption>
                  <h3>Flowers</h3>
                  <span>Fresh</span>
                  <a href="#">SHOP NOW</a>
                </figcaption>
              </figure>
                </div>
                </li>
              </ul>
          </div>
           <div class='col-sm-12'>
             <div class='short-banner-3'>
               <span class='short-banner-text'>Gifts For EveryOne</span>
             </div>
          </div>
        </div>
      <div class='row'>
      <div class='col-sm-4'>
        <img class='img-responsive' src='img/fp9.png'  alt="Banner Description" />
      </div>
       <div class='col-sm-5'>
          <div class="page-header">
              <h1>Flower Farm</h1>
          </div>
          <p class="lead">Flower is good for health 1</p>
          <p class="lead">Flower is good for health 2</p>
          <p class="lead">Flower is good for health 3</p>
          <p class="lead">Flower is good for health 4</p>
       </div>
        <div class='col-sm-3'>
            <div class='circle-div'>
              <div class="view view-fourth">
                    <img class='img-responsive img-circle' src='img/deluxe.png'  alt="Banner Description" />
                    <div class="mask">
                        <h2>Hover Style</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class='row'>
       <div class='col-sm-12'>
           <div class='short-banner-4'>
             <span class='short-banner-text'>Gifts For EveryOne</span>
           </div>
          </div>
        <div class="view view-tenth">
                    <img class='img-responsive' src="img/1.jpg" />
                    <div class="mask">
                        <h2>Hover Style</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img class='img-responsive' src="img/fp6.png" />
                    <div class="mask">
                        <h2>Hover Style</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img class='img-responsive' src="img/3.jpg" />
                    <div class="mask">
                        <h2>Hover Style</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img class='img-responsive' src="img/4.jpg" />
                    <div class="mask">
                        <h2>Hover Style</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
      </div>
       <div class='row hidden-xs'>
                <div class='subscribe-div'>
                  <div class='col-sm-7 '>
                    <div class='subscribe-inner'>
                      <img class='img-responsive' src='img/sub-img3.jpg' />
                    </div>
                  </div>
                  <div class='col-sm-5 text-right'>
                     <form class='form-inline'>
                       <div class='form-field'>
                       <label>Subscribe   </label>
                         <input type='email' class='form-control' placeholder='Enter Email' />
                         <span class='search-icon fa fa-search fa-2x' title='Submit'></span>
                       </div>
                     </form>
                  </div>
                </div>
      </div>
    </div>
     <!-- FOOTER -->
      <footer class='footer-page'>
          <div class='container-fluid'>
           <div class="row">
              <div class="col-sm-offset-1 col-sm-10 col-sm-offset-1 no-padding">
               <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12 no-padding">
                  <div class="accordion-head">The Bouqs Co.</div>
                  <ul class="list-unstyled accordion-body">
                    <li><a class="" href="/about-us">About</a></li>
                    <li><a class="" href="/press">Press</a></li>
                    <li><a class="" href="/en/bouqsvideo">Bouqs Video</a></li>
                    <li><a class="" href="/en/invite">Referral Program</a></li>
                    <li><a class="" href="/blog">Blog</a></li>
                  <ul>
                </ul></ul></div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12 no-padding">
                <div class="accordion-head">Additional Services</div>
                  <ul class="list-unstyled accordion-body">
                    <li><a class="" href="/en/content/150-bouqs-for-events">Events</a></li>
                    <li><a class="" href="/weddings">Weddings</a></li>
                    <li><a class="" href="/business-gifts">Corporate Gifts</a></li>
                    <li><a class="" href="/en/68-gift-cards">Gift Cards</a></li>
                  </ul>
              </div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12 no-padding">
                <div class="accordion-head">Work With Us</div>
                <ul class="list-unstyled accordion-body">
                  <li><a class="" href="/jobs">Jobs</a></li>
                  <li><a class="" href="/for-florists">Florists</a></li>
                  <li><a href="https://www.pepperjamnetwork.com/affiliate/registration.php?refid=130155">Affiliates</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12 no-padding">
                <div class="accordion-head">Help</div>
                <ul class="list-unstyled accordion-body">
                  <li><a href="http://bouqs.com/flower-care">Flower Care</a></li>
                  <li><a href="http://bouqs.com/faq">FAQs</a></li>
                  <li><a href="https://bouqs.com/customer/en/portal/articles/2483014-is-shipping-always-free" target="_blank">*Delivery</a></li>
                  <li><a href="http://bouqs.com/help">Customer Service</a></li>
                  <li><a class="" href="/en/content/2-privacy-legal-stuff">Privacy and Legal Terms</a></li>
                </ul>
              </div>
          </div>
        </div>
          <div class='row'>
              <div class='col-sm-offset-4 col-sm-4 col-sm-offset-4 text-center'>
                <p>
                <div class='circle-link-div'>
                <a  class='circle-link' href="https://twitter.com/thebouqsco" >
                <span class="icon-icontwitter fa fa-twitter"></span>
                </a>
                </div>
                <div class='circle-link-div'>
                <a class='circle-link' href="https://www.facebook.com/TheBouqsCo/">
                <span class="icon-iconfacebook fa fa-facebook"></span>
                </a>
                </div>
                <div class='circle-link-div'>
                <a class='circle-link' href="https://www.pinterest.com/thebouqsco/">
                <span class="icon-iconpinterest fa fa-pinterest" ></span>
                </a>
                </div>
                <div class='circle-link-div'>
                <a class='circle-link' href="https://www.instagram.com/thebouqsco/">
                <span class="icon-iconinstagram fa fa-instagram"></span>
                </a>
                </div>
                </p>
              </div>
              <div class='row'>
                <span class="top-icon fa fa-chevron-circle-up fa-3x" title='Go to Top'></span>
              </div>
          </div>
        </div>
      </footer>


<script type="text/javascript" src="../lib/jquery-2.1.1.min.js"></script>
<script src="../lib/bootstrap.min.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script src="js/modernizr.custom.js"></script>
<script src="js/toucheffects.js"></script>
</body>
</html>
