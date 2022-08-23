import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';
import img5 from 'assets/images/users/5.jpg';
import img6 from 'assets/images/users/6.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Live Status</CardTitle>
                        <CardSubtitle>Ativities of Riders</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Riders Name</th>
                            <th className="border-0">Contact</th>

                            <th className="border-0">Helmet Status</th>
                            <th className="border-0">Speed</th>
                            <th className="border-0">Map</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Muzammil Idrees</h5><span>Peshawar</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp1"></i>

                            </td>
                            <td>35km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Idrees Khan</h5><span>Karachi</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-danger" id="tlp1"></i>

                            </td>
                            <td>45km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Abdullah Khan</h5><span>Lahore</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-warning" id="tlp1"></i>

                            </td>
                            <td>34km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Junaid Khan</h5><span>Islamabad</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp1"></i>

                            </td>
                            <td>65km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>

                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img6} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Zack Khan</h5><span>Jhelum</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp1"></i>

                            </td>
                            <td>65km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>


                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img5} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Ammad Khan</h5><span>Islamabad</span></div>
                                </div>
                            </td>
                            <td> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a> </td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp1"></i>

                            </td>
                            <td>87km/h</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="https://www.google.com/maps/@34.045952,71.5128832,15z" target="_blank" rel="noopener noreferrer"> View</a></td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Projects;
