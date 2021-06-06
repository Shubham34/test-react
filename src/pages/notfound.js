import React from "react";
import styled from "styled-components";
import { Modal } from "@redq/reuse-modal";
import { FormattedMessage } from "react-intl";
import NoResultSvg from "../components/NoResult/no-result.svg";
import { SubHeading } from "../containers/Form/form.style";

const Heading = styled.h3`
//   font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const Sub = styled.h4`
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

export default function NotFound() {
  return (
    <Modal>
      <HelpPageWrapper>
        <HelpPageContainer>
          <Heading>Page Not Found</Heading>
          <Sub><a href={"/"}>Go to home page</a></Sub>
          {/* <h3>
            <FormattedMessage
            id="noResultFound"
            defaultMessage="Sorry, No result found :("
            />
          </h3> */}
          <ImageWrapper>
            <img src={NoResultSvg} alt="Page Not Found" />
          </ImageWrapper>
        </HelpPageContainer>
      </HelpPageWrapper>
    </Modal>
  );
}
