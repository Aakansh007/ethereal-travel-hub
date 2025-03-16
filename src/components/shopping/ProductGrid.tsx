
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Chocolate Selection',
    price: 29.99,
    image: 'placeholder.svg'
  },
  // Add more products
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-airport-primary font-bold">${product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
