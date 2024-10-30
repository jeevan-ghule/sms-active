import { EApiActions } from '../../../../ressources/comon';
import { ICheckExtraActivationOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class checkExtraActivation {
  public query?: Query;

  async checkExtraActivation(options: ICheckExtraActivationOptions | string) {
    let opts;
    if (typeof options == 'string') opts = { activationId: options };
    else opts = options;
    return new Promise((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.checkExtraActivation, opts)
        .then((response) => {
          if (typeof response == 'object') return resolve(response);
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
