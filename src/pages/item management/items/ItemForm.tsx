import React, { useRef, useState } from 'react';
import {
  Form,
  Schema,
  SelectPicker,
  Checkbox,
  Grid,
  Row,
  Col,
  InputNumber,
  FormInstance,
  Uploader,
  Message,
  toaster
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './index.css'; // Custom CSS file for additional styles

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  upc: StringType().isRequired('UPC is required.'),
  itemName: StringType().isRequired('Item Name is required.'),
  unitCost: NumberType().isRequired('Unit Cost is required.'),
  salePrice: NumberType().isRequired('Sale Price is required.')
});

const data = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' }
];

interface UploadedFile {
  name: string;
  url: string;
  blobFile: Blob;
}

const ItemForm = () => {
  const formRef = useRef<FormInstance>(null);
  const [fileInfo, setFileInfo] = useState<UploadedFile | null>(null);

  const handleUploadSuccess = (file: UploadedFile) => {
    setFileInfo(file);
    toaster.push(<Message type="success">File uploaded successfully</Message>, {
      placement: 'topEnd'
    });
  };

  return (
    <Form ref={formRef} model={model} fluid>
      <Grid fluid>
        <Row>
          <Col xs={24} sm={8}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <Uploader
                action="//jsonplaceholder.typicode.com/posts/"
                draggable
                multiple={false}
                listType="picture"
                accept="image/*"
                maxPreviewFileSize={1024 * 1024}
                onSuccess={handleUploadSuccess}
                style={{
                  border: '1px solid #e5e5ea',
                  borderRadius: '8px',
                  padding: '20px',
                  backgroundColor: '#f8f8f9',
                  width: '100%',
                  height: '300px', // Increase height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{ textAlign: 'center', color: '#999', width: '100%' }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      marginBottom: '5px',
                      border: '2px dashed #ddd',
                      borderRadius: '8px',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Click or Drag files to this area to upload
                  </div>
                </div>
              </Uploader>
              <div
                style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}
              >
                <i>
                  Image size should be 256×256px, and less than 1mb. Allowed
                  files .png and .jpg
                </i>
              </div>
              {fileInfo && (
                <img
                  src={URL.createObjectURL(fileInfo.blobFile)}
                  alt="uploaded"
                  style={{
                    width: '256px',
                    height: '256px',
                    marginTop: '10px',
                    border: '1px solid #e5e5ea',
                    borderRadius: '8px'
                  }}
                />
              )}
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Group controlId="upc">
              <Form.ControlLabel>UPC</Form.ControlLabel>
              <Form.Control name="upc" />
            </Form.Group>
            <Form.Group controlId="department">
              <Form.ControlLabel>Department</Form.ControlLabel>
              <Form.Control
                name="department"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="itemName">
              <Form.ControlLabel>Item Name</Form.ControlLabel>
              <Form.Control name="itemName" />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.ControlLabel>Category</Form.ControlLabel>
              <Form.Control
                name="category"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="scanData">
              <Form.ControlLabel>Scan Data</Form.ControlLabel>
              <Form.Control
                name="scanData"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Group controlId="size">
              <Form.ControlLabel>Size</Form.ControlLabel>
              <Form.Control
                name="size"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="subCategory">
              <Form.ControlLabel>Sub Category</Form.ControlLabel>
              <Form.Control
                name="subCategory"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="itemPack">
              <Form.ControlLabel>Item Pack</Form.ControlLabel>
              <Form.Control
                name="itemPack"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="group">
              <Form.ControlLabel>Group</Form.ControlLabel>
              <Form.Control
                name="group"
                accepter={SelectPicker}
                data={data}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group controlId="bottleDeposit">
              <Form.ControlLabel>Bottle Deposit</Form.ControlLabel>
              <Checkbox>Yes</Checkbox>
              <Checkbox>No</Checkbox>
            </Form.Group>
          </Col>
        </Row>

        <Row
          style={{
            padding: '1% 0 1% 20%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Col xs={24}>
            <Form.Group>
              <Checkbox>Tax 1</Checkbox>
              <Checkbox>Tax 2</Checkbox>
              <Checkbox>Non-Tax</Checkbox>
              <Checkbox>EBT</Checkbox>
              <Checkbox>Non-Return</Checkbox>
              <Checkbox>Add Shortcut</Checkbox>
              <Checkbox>IS-Negative</Checkbox>
              <Checkbox>In-Active</Checkbox>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={8}>
            <Form.Group controlId="unitCost">
              <Form.ControlLabel>Unit Cost</Form.ControlLabel>
              <Form.Control name="unitCost" accepter={InputNumber} />
            </Form.Group>

            <Form.Group controlId="margin">
              <Form.ControlLabel>Margin</Form.ControlLabel>
              <Form.Control name="margin" />
            </Form.Group>

            <Form.Group controlId="unitInCase">
              <Form.ControlLabel>Unit In Case</Form.ControlLabel>
              <Form.Control name="unitInCase" />
            </Form.Group>
            <Form.Group controlId="onlinePrice">
              <Form.ControlLabel>Online Price</Form.ControlLabel>
              <Form.Control name="onlinePrice" />
            </Form.Group>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Group controlId="buyDown">
              <Form.ControlLabel>Buy Down</Form.ControlLabel>
              <Form.Control name="buyDown" />
            </Form.Group>
            <Form.Group controlId="markup">
              <Form.ControlLabel>Markup</Form.ControlLabel>
              <Form.Control name="markup" />
            </Form.Group>
            <Form.Group controlId="caseCost">
              <Form.ControlLabel>Case Cost</Form.ControlLabel>
              <Form.Control name="caseCost" />
            </Form.Group>

            <Form.Group controlId="eCommerce">
              <Form.ControlLabel>E-Commerce</Form.ControlLabel>
              <Form.Control name="eCommerce" />
            </Form.Group>
          </Col>

          <Col xs={24} sm={8}>
            <Form.Group controlId="salePrice">
              <Form.ControlLabel>Sale Price</Form.ControlLabel>
              <Form.Control name="salePrice" accepter={InputNumber} />
            </Form.Group>
            <Form.Group controlId="qtyOnHand">
              <Form.ControlLabel>Qty On Hand</Form.ControlLabel>
              <Form.Control name="qtyOnHand" />
            </Form.Group>
            <Form.Group controlId="caseSalePrice">
              <Form.ControlLabel>Case Sale Price</Form.ControlLabel>
              <Form.Control name="caseSalePrice" />
            </Form.Group>
            <Form.Group controlId="reOrderQty">
              <Form.ControlLabel>Re-order Qty</Form.ControlLabel>
              <Form.Control name="reOrderQty" />
            </Form.Group>
          </Col>
        </Row>
      </Grid>
    </Form>
  );
};

export default ItemForm;
