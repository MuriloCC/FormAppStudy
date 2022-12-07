import {ResponsiveValue} from 'native-base/lib/typescript/components/types';

export interface IMarginTypes {
  margin?: ResponsiveValue<string & {}> | string | number;
  marginX?: ResponsiveValue<string & {}> | number;
  marginY?: ResponsiveValue<string & {}> | number;
  marginLeft?: ResponsiveValue<string & {}> | number;
  marginRight?: ResponsiveValue<string & {}> | number;
  marginBottom?: ResponsiveValue<string & {}> | number;
  marginTop?: ResponsiveValue<string & {}> | number;
}
