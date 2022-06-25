export default async (req, res) => {
  let { op1, op2 } = req.body

  op1 = Number(op1);
  op2 = Number(op2);

  if(op2 == 112){
    throw "Error: This is an error";
  }

  res.json({
    result: Number(op1 + op2)
  });
};
