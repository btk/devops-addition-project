export default async (req, res) => {
  let { op1, op2 } = req.body

  op1 = Number(op1);
  op2 = Number(op2);

  res.json({
    result: Number(op1 + op2)
  });
};
