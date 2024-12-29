import { Rule } from 'antd/es/form'

interface ISelectOptions {
  label: number | string,
  value: number | string
}

export interface IRenderFormItem {
  label?: string;
  name?: string;
  isShowTooltip?: boolean;
  component: any;
  rules?: Rule[];
  props?: {
    placeholder?: string | [string, string];
    style?: React.CSSProperties;
    format?: string;
    needConfirm?: boolean;
    min?: number;
    max?: number;
    options?: ISelectOptions[];
    minuteStep?: number;
    size?: string;
    labelInValue?: boolean;
    disabled?: boolean;
    mode?: 'multiple' | 'tags'
    maxTagCount?: number
    urlDeps?: string
    showNow?: boolean
    fieldNames?: {
      label: string
      value: string
    }
  }
}