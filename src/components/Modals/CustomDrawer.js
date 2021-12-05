export const Drawer = (props) => {
  const activePost = useSelector(selectActivePost);

  return (
    <>
      {activePost && (
        <Offcanvas placement="end" show={props.open} onHide={props.handleClose}>
          <Offcanvas.Header>
            <p>{props.post.brief}</p>
          </Offcanvas.Header>
          <Offcanvas.Header>
            <p>{props.post.title}</p>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row>
              <Col>{props.post.title}</Col>
            </Row>

            <ButtonGroup type="submit" width={200}></ButtonGroup>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};
