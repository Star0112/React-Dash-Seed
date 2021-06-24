import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledCarousel
} from "reactstrap";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const slides = [
  {
    src: unsplash1,
    key: "1"
  },
  {
    src: unsplash2,
    key: "2"
  },
  {
    src: unsplash3,
    key: "3"
  }
];

const SlidesOnly = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Slides only</CardTitle>
        <h6 className="card-subtitle text-muted">
          Here’s a carousel with slides only. Note the presence of the{" "}
          <code>.d-block</code> and <code>.w-100</code> on carousel images to
          prevent browser default image alignment.
        </h6>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          items={slides}
          indicators={false}
          controls={false}
        />
      </CardBody>
    </Card>
  );
};

const WithControls = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">With controls</CardTitle>
        <h6 className="card-subtitle text-muted">
          Adding in the previous and next controls.
        </h6>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          items={slides}
          indicators={false}
          controls={true}
        />
      </CardBody>
    </Card>
  );
};

const WithIndicators = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">With indicators</CardTitle>
        <h6 className="card-subtitle text-muted">
          You can also add the indicators to the carousel, alongside the
          controls, too.
        </h6>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          items={slides}
          indicators={true}
          controls={true}
        />
      </CardBody>
    </Card>
  );
};

const WithCaptions = () => {
  const slidesWithCaptions = [
    {
      src: unsplash1,
      altText: "Slide 1",
      caption: "Slide 1",
      key: "1"
    },
    {
      src: unsplash2,
      altText: "Slide 1",
      caption: "Slide 1",
      key: "2"
    },
    {
      src: unsplash3,
      altText: "Slide 1",
      caption: "Slide 1",
      key: "3"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">With captions</CardTitle>
        <h6 className="card-subtitle text-muted">
          Add captions to your slides easily with the{" "}
          <code>.carousel-caption</code> element within any{" "}
          <code>.carousel-item</code>.
        </h6>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          items={slidesWithCaptions}
          indicators={true}
          controls={true}
        />
      </CardBody>
    </Card>
  );
};

const CrossFade = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Crossfade</CardTitle>
        <h6 className="card-subtitle text-muted">
          Add <code>.carousel-fade</code> to your carousel to animate slides
          with a fade transition instead of a slide.
        </h6>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          className="carousel-fade"
          items={slides}
          indicators={true}
          controls={true}
        />
      </CardBody>
    </Card>
  );
};

const Carousel = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Carousel</h1>

    <Row>
      <Col lg="6">
        <SlidesOnly />
      </Col>
      <Col lg="6">
        <WithControls />
      </Col>
      <Col lg="6">
        <WithIndicators />
      </Col>
      <Col lg="6">
        <WithCaptions />
      </Col>
      <Col lg="6">
        <CrossFade />
      </Col>
    </Row>
  </Container>
);

export default Carousel;
