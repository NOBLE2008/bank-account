import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({balance}) {
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state){
  return {
    balance: state.account.balance
  }
}

export default connect(mapStateToProps)(BalanceDisplay);