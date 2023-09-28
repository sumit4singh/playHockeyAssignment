
export interface DocusignRequest {
    recipients: {
      signers: {
        email: string;
        name: string;
        recipientId: number;
        tabs: {
          signHereTabs: {
            xPosition: string;
            yPosition: string;
            documentId: string;
            pageNumber: string;
          }[];
        };
      }[];
    };
    emailSubject: string;
    documents: {
      documentId: string;
      name: string;
      documentBase64: string;
    }[];
    status: string;
  }
  