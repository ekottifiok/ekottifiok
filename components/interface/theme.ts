import type {
  Typography as MUITypography,
  TypographyOptions as MUITypographyOptions
} from "@mui/material/styles/createTypography";
import type {CSSProperties} from "react";

export interface Typography extends MUITypography {
  subtitle2: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  fontSecondaryFamily: CSSProperties["fontFamily"];
  fontWeightMedium: CSSProperties["fontWeight"];
  subtitle1: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  body2: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  fontWeightRegular: CSSProperties["fontWeight"];
  h1: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  caption: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  h2: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h3: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h4: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h5: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h6: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  button: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
    textTransForm: CSSProperties["textTransform"];
  };
  fontFamily: CSSProperties["fontFamily"];
  fontWeightSemiBold: CSSProperties["fontWeight"];
  body1: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  overline: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
    textTransForm: CSSProperties["textTransform"];
  };
  fontWeightBold: CSSProperties["fontWeight"]
}

export interface TypographyOptions extends MUITypographyOptions {
  fontSecondaryFamily: string;
  fontWeightSemiBold: number
}