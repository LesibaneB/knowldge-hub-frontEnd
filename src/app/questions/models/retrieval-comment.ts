import {Owner} from '../../shared/models/owner';

export class RetrievalComment {
  private id: string;
  private contents: string;
  private questionId: string;
  private answerId: string;
  private owner: Owner;
  private createdDate: string;
  private updatedDate: string;
}
