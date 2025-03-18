import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, Tag, Table, Space, Button, Typography } from 'antd';
import { StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = [
      {
        id: 1,
        title: 'Essence Mascara Lash Princess',
        description:
          'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.',
        category: 'beauty',
        price: 9.99,
        discountPercentage: 7.17,
        rating: 4.94,
        stock: 5,
        brand: 'Essence',
        tags: ['beauty', 'mascara'],
        availabilityStatus: 'Low Stock',
        reviews: [
          { rating: 2, comment: 'Not as described!', reviewerName: 'John Doe' },
          { rating: 5, comment: 'Very satisfied!', reviewerName: 'Scarlett Wright' },
        ],
        images: [
          'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
        ],
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
      },
      {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category": "beauty",
        "price": 19.99,
        "discountPercentage": 5.5,
        "rating": 3.28,
        "stock": 44,
        "tags": [
          "beauty",
          "eyeshadow"
        ],
        "brand": "Glamour Beauty",
        "sku": "MVCFH27F",
        "weight": 3,
        "dimensions": {
          "width": 12.42,
          "height": 8.63,
          "depth": 29.13
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Liam Garcia",
            "reviewerEmail": "liam.garcia@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Very disappointed!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Nora Russell",
            "reviewerEmail": "nora.russell@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Elena Baker",
            "reviewerEmail": "elena.baker@x.dummyjson.com"
          }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 32,
        "meta": {
          "createdAt": "2024-05-23T08:56:21.618Z",
          "updatedAt": "2024-05-23T08:56:21.618Z",
          "barcode": "2817839095220",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
      },
    ];

    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card style={{ width: '60%', margin: '20px auto' }}>
      <Image src={product.thumbnail} alt={product.title} width={200} />
      <Title level={2}>{product.title}</Title>
      <Text>{product.description}</Text>
      <div style={{ marginTop: '10px' }}>
        <Text strong>Price: </Text>
        <Text type="danger">${product.price}</Text>
      </div>
      <Text strong>Brand: </Text> {product.brand}
      <div>
        <Text strong>Category: </Text> {product.category}
      </div>
      <div>
        <Text strong>Stock: </Text>
        <Tag color={product.stock > 0 ? 'green' : 'red'}>{product.availabilityStatus}</Tag>
      </div>
      <div style={{ marginTop: '10px' }}>
        <StarOutlined style={{ color: 'gold' }} /> {product.rating} / 5
      </div>
      <Space style={{ marginTop: '20px' }}>
        <Button type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
      </Space>
    </Card>
  );
};

export default ProductDetails;