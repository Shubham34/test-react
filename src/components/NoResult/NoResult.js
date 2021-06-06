import React from "react";
import { useHistory } from "react-router-dom";
import NoResultSvg from "./no-result.svg";
import { NoResultWrapper, ImageWrapper, ButtonWrapper } from "./NoResult.style";
import Button from "../Button/Button";
import { ArrowPrev } from "../AllSvgIcon";
import { SearchContext } from "../../contexts/search/search.context";
import { FormattedMessage } from "react-intl";

const NoResultFound = ({ id, defaultMessage = "Sorry, No product found :(", props }) => {
  const { searchdispatch } = React.useContext(SearchContext);

  function onClickButton() {
    searchdispatch({
      type: "RESET",
    });
    window.location.href = "/";
    // window.location.reload();
  }
  return (
    <NoResultWrapper id={id}>
      <h3>
        <FormattedMessage
          id="noResultFound"
          defaultMessage={defaultMessage}
        />
      </h3>

      <ImageWrapper>
        <img src={NoResultSvg} alt="No Result" />
      </ImageWrapper>

      {/* <ButtonWrapper>
        <div onClick={onClickButton}>
          <Button title="Go Back" />
        </div>
      </ButtonWrapper> */}
    </NoResultWrapper>
  );
};

export default NoResultFound;
