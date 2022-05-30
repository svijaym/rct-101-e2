import { Button, FormControl, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddProduct = () => {
    function InitialFocus() {
    const { isOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const onCreate = () => {
    }
  
    return (
      <>
      <Button my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal>
      initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        <ModalOverlay />
      <ModalContent>
            <ModalHeader>Add New Product</ModalHeader>
        <ModalBody pb={6}>
        <FormControl>
          <Input data-cy="add-product-title" placeholder="Title" type="text"/>
          <Select data-cy="add-product-category" >
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="RS: Price" type="number"/>
        </FormControl>
          <Button data-cy="add-product-submit-button" onClick={onCreate}>Create</Button>
        </ModalBody>
      </ModalContent>
      </Modal>
    </>
  );
};
};
export default AddProduct;
