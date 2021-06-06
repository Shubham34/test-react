import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const MobileCarouselDropdown = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const OfferPageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  position: relative;
  padding: 100px 60px 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 100px 30px 60px;
  }

  @media (max-width: 1199px) {
    padding: 100px 30px 60px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: #f4f4f4;
`;

const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;
`;

const MainHeader = styled.h1`
  width: 100%;
  text-align: center;
  color: green;
  padding: 20px 0px;
  text-transform: uppercase;
  font-size: 3.5vw;
`;

const SidebarSection = styled.div`
  background-color: #ffffff;
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 280px);
  height: auto;
  min-height: 100vh;
  padding: 30px 30px 50px;

  @media (max-width: 768px) {
    padding: 30px 7.5px 100px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 15px;
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;

const OfferSection = styled.div`
  width: 100%;
  height: auto;
  display: block;

  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};

  .prevButton {
    left: 1rem;
    top: 50%;
  }

  .nextButton {
    right: 1rem;
    top: 50%;
  }

  @media (max-width: 990px) and (min-width: 600px) {
    // padding: 20px 15px;
    .prevButton {
      left: 1rem;
      top: 50%;
    }

    .nextButton {
      right: 1rem;
      top: 50%;
    }
  }
  @media (max-width: 990px) {
    padding-top: 15px;
  }
`;

const PromoSection = styled.div`
  width: 100%;
  height: auto;
  display: block;
  background-color: rgb(255,255,255);
  position: relative;
  margin-top: 0px;
  border-bottom: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};

  .prevButton {
    left: 0rem;
    top: 50%;
  }

  .nextButton {
    right: 0rem;
    top: 50%;
  }

  @media (max-width: 990px) and (min-width: 600px) {
    // padding: 20px 15px;
    .prevButton {
      left: 0rem;
      top: 50%;
    }

    .nextButton {
      right: 0rem;
      top: 50%;
    }
  }
  @media (max-width: 990px) {
    padding-top: 15px;
  }
`;

const BrandSection = styled.div`
  width: 100%;
  height: auto;
  display: block;
  background-color: rgb(255,255,255) !important;
  position: relative;
  margin-top: 20px;
  border-bottom: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};

  .prevButton {
    left: 0rem;
    top: 50%;
  }

  .nextButton {
    right: 0rem;
    top: 50%;
  }

  @media (max-width: 990px) and (min-width: 600px) {
    // padding: 20px 15px;
    .prevButton {
      left: 0rem;
      top: 50%;
    }

    .nextButton {
      right: 0rem;
      top: 50%;
    }
  }
  @media (max-width: 990px) {
    padding-top: 15px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #389244;
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid #389244;
  width: auto;
  display: inline-block;
`;

const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;

const ProductsCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
  background-color: #fff;
  position: relative;
  text-align: center;
  font-family: "Lato", sans-serif;
  border-radius: 20px;
  cursor: pointer;
`;

export {
  OfferPageWrapper,
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Heading,
  ProductsRow,
  ProductsCol,
  CardWrapper,
  MainHeader,
  PromoSection,
  BrandSection
};
