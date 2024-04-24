import { QR_CODE_GENERATOR } from "../types/qrGen";

export const qrCodeGenerator = (payload) => ({
  type: QR_CODE_GENERATOR,
  payload,
});
