import { EApiActions } from '../../../../ressources/comon';
import { IGetIncomingCallStatusOptions } from '../../../../ressources/options';
import {
  EActivationSetStatusAnswer,
  IStatusResponse,
} from '../../../../ressources/status';
import { Query } from '../../../query/query.module';

export class getIncomingCallStatus {
  public query?: Query;

  async getIncomingCallStatus(
    options: IGetIncomingCallStatusOptions | string | number
  ) {
    let opts;
    if (typeof options == 'string' || typeof options == 'number')
      opts = { id: options };
    else opts = options;
    return new Promise<IStatusResponse>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getIncomingCallStatus, opts)
        .then((res) => {
          if (typeof res == 'object') {
            if (res.status && EActivationSetStatusAnswer[res.status])
              return resolve({
                message: EActivationSetStatusAnswer[res.status],
                code: res.status,
                data: res.phone,
              });
          }
          reject(res);
        })
        .catch((err) => reject(err));
    });
  }
}
