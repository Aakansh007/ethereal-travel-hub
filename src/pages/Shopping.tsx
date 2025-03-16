
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Layout from '../components/Layout';
import ProductGrid from '../components/shopping/ProductGrid';

const Shopping = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-airport-primary">Duty-Free Shopping</h1>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search products..." className="pl-10" />
          </div>
        </div>
        <ProductGrid />
      </motion.div>
    </Layout>
  );
};

export default Shopping;
