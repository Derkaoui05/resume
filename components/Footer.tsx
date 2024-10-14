import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Card className="text-white">
        <CardBody className="flex flex-col items-center justify-center p-4">
          <h2 className="text-lg md:text-xl font-bold">Thank you for visiting!</h2>
          <div className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Derkaoui Yassir. All rights reserved.
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;
