import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

function ItemModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: name,
    };
    // Add item via addItem action
    props.addItem(newItem);

    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: '2rem' }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add an Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Name</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Enter item name"
                onChange={onChange}
              />
              <Button
                block
                color="dark"
                style={{ marginTop: '1rem' }}
                type="submit"
              >
                Add item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
