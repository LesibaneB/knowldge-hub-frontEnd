import {Owner} from '../../shared/models/owner';

export class RetrievalComment {
  private readonly id: string;
  private readonly contents: string;
  private readonly questionId: string;
  private readonly answerId: string;
  private readonly owner: Owner;
  private readonly createdDate: string;
  private readonly updatedDate: string;
}
