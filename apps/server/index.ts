import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import cors from "cors";
import { accounts, transactions } from "./data";
import { BadRequestError, ConflictError, IError, NotFoundError } from "./error";

const app = express();
app.use(cors());
app.use(json());

const PORT = 5011;

app.get("/api/accounts", (req: Request, res: Response) => {
  return res.status(200).json({ data: accounts });
});

app.get("/api/accounts/:accountNumber", (req: Request, res: Response) => {
  const { accountNumber } = req.params;
  let accountDetails = {};
  accounts.accountGroups.forEach(({ accounts }) => {
    const matchingAccount = accounts.find(
      (account) => account.accountNumber === accountNumber
    );
    if (matchingAccount) accountDetails = matchingAccount;
  });
  const accountTransactions = transactions.find(
    ({ account }) => account.accountNumber === accountNumber
  )?.transactions;
  return res
    .status(200)
    .json({ data: { accountDetails, accountTransactions } });
});

function errorHandling(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (typeof err === "object" && err.code) {
    return res.status(err.code).json({
      message: err.message,
      data: err.data,
    });
  }

  return res.status(500).json({
    message: "Something went wrong",
  });
}

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
