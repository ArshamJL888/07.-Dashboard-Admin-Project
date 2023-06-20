import React from 'react'
import './WidgetLg.css'
import { transactionData } from '../../datas'
import getTransactions from '../../AllTransactions'
import { useState, useEffect } from 'react';

export default function WidgetLg() {



    let allTransactions = [];

    const [transactionIsChaneg, setTransactionIsChaneg] = useState(false)

    const [transactionsData, setTransactionsData] = useState(allTransactions);

    useEffect(() => {
        allTransactions = [];
        getTransactions().then(data => {
            data.forEach(info => {
                allTransactions.push({ TransactionID: info[0], ...info[1] })
            })
            setTransactionsData(allTransactions)
        })
    }, [transactionIsChaneg])



    return (
        <div className='widget-lg'>
            <span className='wiget-lg-title'>Latest Transactions Data</span>
            <table className="widget-lg-table">
                <tr className="widget-lg-table-row">
                    <th className="widget-lg-table-header">Customer</th>
                    <th className="widget-lg-table-header">Date</th>
                    <th className="widget-lg-table-header">Amount</th>
                    <th className="widget-lg-table-header">Status</th>
                </tr>
                {
                    transactionsData.map(transact => (
                        <tr key={transact.id} className="widget-lg-table-row">
                            <td className="widget-lg-table-user">
                                <img src={transact.user.img} alt="widget-lg-table-user-img" className="widget-lg-table-user-img" />
                                <span className='widget-lg-user-name'>{transact.user.username}</span>
                            </td>
                            <td className='widget-lg-tranaction-date'>{transact.date}</td>
                            <td className='widget-lg-transaction-amount'>${transact.amount}</td>
                            <td className='widget-lg-transaction-status'><button className={'widget-lg-btn ' + transact.status}>{transact.status}</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
