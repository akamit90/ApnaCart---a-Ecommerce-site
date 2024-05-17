import React, { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import toast from 'react-hot-toast';

function ModalSection() {
    const [openModal, setOpenModal] = useState(false);
    const [orderDetails, setOrderDetails] = useState({fullName: "", address: "", pincode: "", mobile: ""});

    function onCloseModal() {
        setOpenModal(false);
        setOrderDetails({fullName: "", address: "", pincode: "", mobile: ""});
    }

    const handleChange = (e) => {
        setOrderDetails({...orderDetails, [e.target.name]: e.target.value});
    }

    const handleOrder = (e) => {
        e.preventDefault();
        if (!orderDetails.fullName || !orderDetails.address || !orderDetails.pincode || !orderDetails.mobile) {
            return toast.error("All fields are required");
        } else {
            toast.success("Order successful");
            onCloseModal();
        }
    }

    return (
        <>
            <Button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
                    onClick={() => setOpenModal(true)}>
                Checkout
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="fullName" value="Your Full Name" />
                            </div>
                            <TextInput
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Enter Your full name"
                                value={orderDetails.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="Full Address" />
                            </div>
                            <TextInput
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Full address"
                                value={orderDetails.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pincode" value="Pincode" />
                            </div>
                            <TextInput
                                id="pincode"
                                name="pincode"
                                type="text"
                                placeholder="Pincode"
                                value={orderDetails.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="mobile" value="Mobile Number" />
                            </div>
                            <TextInput
                                id="mobile"
                                name="mobile"
                                type="text"
                                placeholder="Mobile Number"
                                value={orderDetails.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Button onClick={handleOrder}>Order Now</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalSection;
