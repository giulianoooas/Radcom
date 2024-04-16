import "./about.component.css";

export const About = () => {
    return <section id="about">
	<div className="container reveal">
		<div className="row">

      <div className="col-md-6 col-sm-12">
        <img src="src/assets/about-img.png" className="img-responsive wow fadeInUp" alt="About" height="250" width="600"></img>
      </div>

			<div className="col-md-6 col-sm-12">
				<div className="about-thumb">
					<div className="section-title">
						<h1 className="wow fadeIn" data-wow-delay="0.2s">our <span className="main-color">company</span></h1>
						<h3 className="wow fadeInUp" data-wow-delay="0.4s">Lorem <strong>ipsum dolor</strong> dolor lorem<strong> ipsum</strong></h3>
					</div>
					<div className="wow fadeInUp" data-wow-delay="0.6s">
						<p>Vivamus elit risus, porttitor id placerat ut, aliquet non quam. Pellentesque nulla metus, ornare et porttitor vel, consectetur vitae erat. Vestibulum tristique semper tellus vitae condimentum. Duis sed eros eget diam dictum posuere.</p>
						<p>Aliquam vel gravida ligula. Phasellus ut purus ac libero ultrices commodo commodo at quam. In vestibulum purus sit amet tempus 
              euismod. Donec sed congue nisl.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus veritatis, sapiente delectus voluptatem alias suscipit eius consectetur beatae totam sed 
                consequatur magnam? Sit quis perferendis itaque minima voluptas consequuntur quasi?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellat! Voluptates rem officia soluta corporis earum, labore incidunt quia aperiam perspiciatis, doloremque reiciendis quod nihil voluptatum quo blanditiis totam consectetur!</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>}
