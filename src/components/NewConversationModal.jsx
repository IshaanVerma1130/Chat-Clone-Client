import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function NewConversationModal() {
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button className="mt-4" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default NewConversationModal;
