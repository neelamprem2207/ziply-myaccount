import styled from "styled-components";
import { Typography } from "@mui/material";

export const PrivacyCenter = () => {
  return (
    <>
      <Header>Privacy Center</Header>
      <Typography variant="subtitle2">
        Protecting the privacy of our customers is important to Ziply Fibre.
        This privacy policy is designed to inform you about how we collect, use,
        share, and protect the information of customers of our consumer,
        business and residential services, namely our Internet, Phone, TV and
        Privacy products. It also governs the information we collect when you
        visit our website, and describes certain choices we provide to our
        customers regarding the use of their information.
      </Typography>
      <br />
      <Typography variant="subtitle2">
        Please note that separate privacy policies may apply to the services of
        other providers that you purchase from us, such as the Dish TV Package.
        We encourage you to review the privacy policies and practices of such
        other providers
      </Typography>

      <ul>
        <li>Privacy Policy (Pdf)</li>
      </ul>
    </>
  );
};

const Header = styled.div`
  font-size: 1.4rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 20px;
`;
