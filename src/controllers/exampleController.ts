import { Request, Response } from 'express';

class ExampleController {
  public index (req: Request, res: Response) {
    return res.json({
      status: 'success',
      data: 'Esto es un ejemplo'
    });
  }
}

export default new ExampleController();
