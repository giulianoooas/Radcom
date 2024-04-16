import "./landing.component.css";

export const Landing = () => {
    return <section id="home">
	<div className="container">
		<div className="row">

			<div className="col-md-offset-2 col-md-8 col-sm-12">
				<div className="home-thumb">
				 <h1 className="wow fadeInUp background" data-wow-delay="0.4s">Hello, we are <span className="main-color">Radcom</span></h1>
          			<h3 className="wow fadeInUp background" data-wow-delay="0.6s">Lorem ipsum <strong>dolor lorem</strong> ipsum <strong>dolor lorem</strong> ipsum</h3>
        			<a href="/" data-toggle="modal" data-target="#modal1" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="1.0s">About Us</a>
				</div>
			</div>

		</div>
	</div>		
</section>
};
