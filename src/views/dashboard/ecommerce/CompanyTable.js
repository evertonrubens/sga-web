import Avatar from "@components/avatar"
import { Table, Card } from "reactstrap"
import {
  Award,
  ArrowUp,
  ArrowUpRight,
  TrendingUp,
  TrendingDown
} from "react-feather"

const CompanyTable = () => {
  const data = [
      {
        img: require("@src/assets/images/icons/logo_car/audi.svg").default,
        name: "Audi",
        email: "jardinsspc@audi.com.br",
        icon: <Award size={18} />,
        category: "Premium",
        views: "23.4k",
        time: "24 hours",
        revenue: "891.2",
        sales: "68"
      },
      {
        img: require("@src/assets/images/icons/logo_car/bmw.svg").default,
        name: "BMW",
        email: "bmwbrasilv@bmw.com.br",
        icon: <Award size={18} />,
        category: "Premium",
        views: "78k",
        time: "2 days",
        revenue: "668.51",
        sales: "97",
        salesUp: true
      },
      {
        img: require("@src/assets/images/icons/logo_car/mercedes-benz.svg")
          .default,
        name: "Mercedes",
        email: "mercedesspe@mercedes-bens.com.br",
        icon: <Award size={18} />,
        category: "Premium",
        views: "162",
        time: "5 days",
        revenue: "522.29",
        sales: "62",
        salesUp: true
      },
      {
        img: require("@src/assets/images/icons/logo_car/toyota.svg").default,
        name: "Toyota",
        email: "toyotasp@toyota.com/brazil",
        icon: <ArrowUp size={18} />,
        category: "Gold",
        views: "214",
        time: "24 hour",
        revenue: "291.01",
        sales: "88",
        salesUp: true
      },
      {
        img: require("@src/assets/images/icons/logo_car/hyundai.svg").default,
        name: "Hyundai",
        email: "pudais@jife.com",
        icon: <ArrowUp size={18} />,
        category: "Gold",
        views: "208",
        time: "1 week",
        revenue: "783.93",
        sales: "16"
      },
      {
        img: require("@src/assets/images/icons/logo_car/jeep.svg").default,
        name: "Jeep",
        email: "jeep_south_american@jeep.com.br",
        icon: <ArrowUpRight size={18} />,
        category: "Plate",
        views: "990",
        time: "1 month",
        revenue: "780.05",
        sales: "78",
        salesUp: true
      },
      {
        img: require("@src/assets/images/icons/logo_car/volkswagen.svg")
          .default,
        name: "Volkswagen",
        email: "volks@volkswagen.com",
        icon: <ArrowUpRight size={18} />,
        category: "Plate",
        views: "12.9k",
        time: "12 hours",
        revenue: "531.49",
        sales: "42",
        salesUp: true
      }
    ],
    colorsArr = {
      Premium: "light-primary",
      Gold: "light-success",
      Plate: "light-warning"
    }

  const renderData = () => {
    return data.map((col) => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className="text-success" />
      ) : (
        <TrendingDown size={15} className="text-danger" />
      )

      return (
        <tr key={col.name}>
          <td>
            <div className="d-flex align-items-center">
              <div className="avatar rounded">
                <div className="avatar-content">
                  <img src={col.img} alt={col.name} />
                </div>
              </div>
              <div>
                <div className="font-weight-bolder">{col.name}</div>
                <div className="font-small-2 text-muted">{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <Avatar
                className="mr-1"
                color={colorsArr[col.category]}
                icon={col.icon}
              />
              <span>{col.category}</span>
            </div>
          </td>
          <td className="text-nowrap">
            <div className="d-flex flex-column">
              <span className="font-weight-bolder mb-25">{col.views}</span>
              <span className="font-small-2 text-muted">in {col.time}</span>
            </div>
          </td>
          <td>${col.revenue}</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="font-weight-bolder mr-1">{col.sales}%</span>
              {IconTag}
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className="card-company-table">
      <Table responsive>
        <thead>
          <tr>
            <th>Company</th>
            <th>Category</th>
            <th>Views</th>
            <th>Revenue</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
