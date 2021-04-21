import { HttpRequest } from '../modules/shared/services/http-request.service';

export class SimulatorControllerApi extends HttpRequest {

    constructor(api_url) {

      super();

      if (api_url) {
        this.api_url = MySuperApp.back_end_endpoint + api_url;
      } else {
        this.api_url = MySuperApp.back_end_endpoint;
      }
    }

    getBaseUrl() {
      return this.api_url;
    }

    getPreviews(idPlayer, file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/simulator/${idPlayer}/previews`;
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    getSimulator(idSimulator, file) {
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/simulator/story/${idSimulator}`;
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    saveResult(saveResultDto, idPlayer, file) {
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/simulator/${idPlayer}/save-result`;
      return this.gatewayRequest(url, 'POST', saveResultDto, queryParams, handleAs, formParams);  
    }

  buildCollectionParam (param, collectionFormat) {
    if (!param) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.join(',');
      case 'ssv':
        return param.join(' ');
      case 'tsv':
        return param.join('\t');
      case 'pipes':
        return param.join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param;
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

}

