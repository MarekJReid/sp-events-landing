import * as React from "react";
import { Container } from "../../styles/ContainerStyles.css";
import GlobalStyles from '../../styles/GlobalStyles.css';
import { Flex, DFFL, D_H1, D1_H1, D_BC1, Section1, Section2, Input, M_button, Icon, Section3, IG, FB } from "./LandingPage.css"
import { StaticImage } from 'gatsby-plugin-image';
import { H1, BC1,}from "../../styles/Typography" 

const LandingPage = () => {
    return (
        <div>
            <GlobalStyles />
            <Container size="lg">
                <Flex>
                    <Section1>
                        <H1>Coming soon</H1>
                        <div>
                            <IG>
                                <StaticImage width={42} height={42} layout="fixed" alt="No image" src="../../assets/images/SPE_IG_Static.svg" />
                            </IG>
                            <FB>
                                <StaticImage width={42} height={42} layout="fixed" alt="No image" src="../../assets/images/SPE_SM_Facebook_Static.svg" />
                            </FB>
                        </div>
                        <div>
                            <StaticImage width={110} height={47} layout="fixed" alt="No image" src="../../assets/images/SPE_Logo.svg" />
                        </div>
                    </Section1>
                    <Section2>
                        <div>
                            <StaticImage width={796} height={471} layout="fullWidth" alt="No image" src="../../assets/images/SPE_Desktop_Image.jpg" />
                        </div>
                        <Section3>
                            <D1_H1>Coming soon</D1_H1>
                            <BC1>For general enquires, please contact us at loremipsum@spevents.com.au. Otherwise, please sign up for updates from the Scott Pickett Group and to be the first to know when our new site is live.</BC1>
                            <DFFL>EMAIL ADDRESS</DFFL>
                            <Input type="email" placeholder="Please enter your email address"></Input><br></br>
                            <M_button type="submit">SUBSCRIBE</M_button>
                            <div>
                                <StaticImage width={110} height={47} layout="fixed" alt="No image" src="../../assets/images/SPE_Logo.svg" />
                                <Icon>
                                    <IG>
                                        <StaticImage width={42} height={42} layout="fixed" alt="No image" src="../../assets/images/SPE_IG_Static.svg" />
                                    </IG>
                                    <FB>
                                        <StaticImage width={42} height={42} layout="fixed" alt="No image" src="../../assets/images/SPE_SM_Facebook_Static.svg" />
                                    </FB>

                                </Icon>
                            </div>
                        </Section3>
                    </Section2>
                </Flex>
            </Container>
        </div>
    )
}

export default LandingPage
