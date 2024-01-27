import SheetService from '$services/Sheet.service';

export class RootService {
  SheetService: SheetService;

  constructor() {
    this.SheetService = new SheetService();
  }
}

export default new RootService();
